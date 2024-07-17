import { toPng, toJpeg, toSvg } from 'html-to-image';

const Download = ({ exportRef, isModalOpen, setIsModalOpen }) => {
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
    isModalOpen && (
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div className="bg-neutral-300 border border-neutral-500 text-neutral-200 rounded-2xl overflow-hidden">
          <div className="flex justify-between items-center p-4 border border-b-neutral-500">
            <h2 className="font-semibold text-neutral-900">Choose File Format:</h2>
            <div
              onClick={() => setIsModalOpen(false)}
              className="text-white text-sm rounded-full grid place-items-center h-6 w-6 bg-neutral-700 hover:text-red-800">
              X
            </div>
          </div>
          <div className="flex gap-2 justify-around p-4 bg-white">
            <button
              onClick={() => {
                exportAsImage(exportRef.current, 'png', 'icon');
                setIsModalOpen(false);
              }}
              className="h-16 w-20 bg-blue-600 rounded-lg hover:bg-blue-700">
              PNG
            </button>
            <button
              onClick={() => {
                exportAsImage(exportRef.current, 'jpeg', 'icon');
                setIsModalOpen(false);
              }}
              className="h-16 w-20 bg-green-600 rounded-lg hover:bg-green-700">
              JPEG
            </button>
            <button
              onClick={() => {
                exportAsImage(exportRef.current, 'svg', 'icon');
                setIsModalOpen(false);
              }}
              className="h-16 w-20 bg-red-600 rounded-lg hover:bg-red-700">
              SVG
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Download;
