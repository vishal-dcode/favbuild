import { useContext, useEffect, useRef, useState } from 'react';
import { toPng, toJpeg, toSvg } from 'html-to-image';
import { StoreContext } from '../context/storeContext';
import * as ReactIcons from 'react-icons/bi'; // Import all icons from react-icons/bi
import * as heroIcons from '@heroicons/react/24/solid';

export default function Canvas() {
  const exportRef = useRef();
  const [storageValue, setStorageValue] = useState({});
  const { updateStorage } = useContext(StoreContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('value'));
    setStorageValue(storageData);
  }, [updateStorage]);

  const Icon =
    storageValue?.iconSet === 'react' ? ReactIcons[storageValue?.iconName] : heroIcons[storageValue?.iconName];

  const exportAsImage = async (el, format, imageFileName) => {
    try {
      let dataUrl;
      if (format === 'png') {
        dataUrl = await toPng(el, { backgroundColor: null });
      } else if (format === 'jpeg') {
        dataUrl = await toJpeg(el, { backgroundColor: null, quality: 1.0 });
      } else if (format === 'svg') {
        dataUrl = await toSvg(el);
      }
      downloadImage(dataUrl, imageFileName, format);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  const downloadImage = (dataUrl, fileName, format) => {
    const fakeLink = window.document.createElement('a');
    fakeLink.style = 'display:none;';
    fakeLink.download = `${fileName}.${format}`;

    fakeLink.href = dataUrl;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
  };

  return (
    <section className="relative w-full h-full grid place-items-center md:p-4 p-4 pt-10 pb-20">
      <div
        ref={exportRef}
        id="mainIcon"
        style={{
          borderRadius: `${storageValue.bgBorderRadius}%`,
          background: `${storageValue.bgColor}`,
          border: `${storageValue.bgBorder}px solid ${storageValue.bgBorderColor}`
        }}
        className="w-full h-fill sm:w-[512px] sm:h-[512px] aspect-square bg-[#141414] grid place-items-center">
        <div style={{ transform: `rotate(${storageValue?.iconRotation}deg)` }}>
          {Icon && (
            <Icon
              style={{
                color: storageValue?.iconColor,
                width: storageValue?.iconSize,
                height: storageValue?.iconSize
              }}
            />
          )}
        </div>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="uppercase font-semibold text-white text-sm absolute bottom-4 right-4 max-md:left-20 max-md:right-20 border border-neutral-800 rounded-full p-3 px-5 bg-neutral-800 hover:bg-[#3c2aca]">
        Download
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-neutral-200 font-semibold text-neutral-200 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-4 ">
              <h2 className="text-lg font-bold text-neutral-900">Choose File Format:</h2>
              <div onClick={() => setIsModalOpen(false)} className="text-black text-3xl hover:text-red-800">
                <ReactIcons.BiX />
              </div>
            </div>
            <div className="flex gap-2 justify-around">
              <button
                onClick={() => {
                  exportAsImage(exportRef.current, 'png', 'icon');
                  setIsModalOpen(false);
                }}
                className="h-20 w-20 bg-blue-600 rounded-lg hover:bg-blue-700">
                PNG
              </button>
              <button
                onClick={() => {
                  exportAsImage(exportRef.current, 'jpeg', 'icon');
                  setIsModalOpen(false);
                }}
                className="h-20 w-20 bg-green-600 rounded-lg hover:bg-green-700">
                JPEG
              </button>
              <button
                onClick={() => {
                  exportAsImage(exportRef.current, 'svg', 'icon');
                  setIsModalOpen(false);
                }}
                className="h-20 w-20 bg-red-600 rounded-lg hover:bg-red-700">
                SVG
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
