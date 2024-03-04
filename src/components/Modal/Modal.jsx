import { Info } from "lucide-react";
const Modal = ({ toggleModal }) => {
  return (
    <div
      className="relative z-[999]  "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="fixed bottom-0 left-0 right-0 lg:relative transform overflow-hidden rounded-t-xl  lg:rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 flex justify-between items-center w-full   sm:ml-4 sm:mt-0 ">
                  <h3
                    className="text-xl text-right font-semibold leading-6 text-gray-900"
                    id="modal-title">
                    طلب تحويل جديد
                  </h3>
                  <button
                    onClick={toggleModal}
                    type="button"
                    className="border rounded-full text-gray-400 bg-transparent  hover:text-gray-800  text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
                    data-modal-hide="default-modal">
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-100">
              <form className="max-w-2xl mx-auto px-5 py-6 ">
                <div className="bg-white rounded-lg p-4 px-6">
                  <div className="mb-5">
                    <input
                      type="number"
                      id="price"
                      className="h-14 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="المبلغ مثال : 100"
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <input
                      type="datetime-local"
                      id="date"
                      className="h-14 bg-gray-100 border border-gray-300 t text-sm rounded-lg  block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black"
                      placeholder="تاريخ الطلب"
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <input
                      type="text"
                      id="iban"
                      className="h-14 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="رقم الايبان"
                      required
                    />
                  </div>
                </div>
              </form>
              <div className="text-right px-6 flex items-center gap-2 pb-6">
                <Info size={"14px"} />
                <span>هل تريد طلب مساعدة</span>
              </div>
            </div>
            <div className=" px-4 py-3 sm:flex sm:px-6 mt-8 w-full">
              <button
                type="button"
                className="mb-7 w-full justify-center rounded-full bg-black px-3 py-5 text-sm font-semibold text-white shadow-sm    ">
                تأكيد الطلب
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
