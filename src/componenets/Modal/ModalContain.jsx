import React from "react";

const ModalContain = ({ isVisible, closeModal }) => {
  return isVisible ? (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[500px]">
        <div className="bg-white rounded-lg p-5 text-xl font-serif">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, unde
          ullam natus sit laboriosam magnam ducimus, veritatis molestiae
          distinctio necessitatibus aliquid voluptatum modi explicabo odio
          voluptate dolore, suscipit nesciunt in.
          <div className="flex justify-center mt-4">
            <button
              className="border-2 border-black px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-bold text-lg"
              onClick={() => closeModal(false)}
            >
              Close Modal
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalContain;
