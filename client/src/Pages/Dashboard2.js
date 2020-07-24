import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Dashboard";

it("renders", () => {
  const { asFragment } = render(<Button />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div>
        <div
          class="hidden"
        >
          <div
            class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
          >
            <div
              class="fixed inset-0 transition-opacity"
            >
              <div
                class="absolute inset-0 bg-teal-900 opacity-75"
              />
            </div>
            <div
              aria-labelledby="modal-headline"
              aria-modal="true"
              class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
              role="dialog"
            >
              <div
                class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
              >
                <div
                  class="sm:flex sm:items-start"
                >
                  <div
                    class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <svg
                      class="h-6 w-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div
                    class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                  >
                    <h3
                      class="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                       Delete 
                    </h3>
                    <div
                      class="mt-2"
                    >
                      <p
                        class="text-lg leading-5 text-gray-700"
                      >
                        Are you sure you want to delete 
                        <span
                          class=" text-xl font-bold"
                        />
                        ? 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
              >
                <span
                  class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"
                >
                  <button
                    class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    type="button"
                  >
                    Delete 
                  </button>
                </span>
                <span
                  class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
                >
                  <button
                    class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    type="button"
                  >
                    Cancel 
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <section
          class="text-gray-700s mt-8"
        >
          <div
            class="container card_element background_custom px-2 lg:max-h-screen md:max-h-screen sm:mb-0 md:mb-8 h-1/2 py-8 mx-auto bg-gray-100 flex overflow-hidden"
          >
            <div
              class="w-full mx-auto flex flex-wrap"
            >
              <div
                class="lg:w-1/2 w-full lg:pr-10 md:pr-4 p-4 lg:mb-0"
              >
                <div
                  class="flex w-full"
                >
                  <div
                    class="icon"
                  >
                    <div
                      class="cloud2 small-cloud"
                    />
                    <div
                      class="cloud2"
                    />
                  </div>
                  <div
                    class="text-4xl font-bold text-gray-300"
                  >
                    Raleigh
                  </div>
                  <div
                    class="text-4xl ml-4 text-gray-300"
                  >
                     ,  80 ℉
                  </div>
                </div>
                <div
                  class="flex float-right sm:m-0 md:m-0 text-xl text-gray-300"
                >
                  Sunday, July 12, 2020
                </div>
                <div
                  class="container"
                >
                  <div
                    class="flex flex-wrap mt-12 text-center"
                  >
                    <div
                      class="p-4 lg:w-1/3 md:w-1/3 sm:w-full w-full"
                    >
                      <div
                        class="card_element3 px-4 py-6 rounded-lg"
                      >
                        <h2
                          class="font-medium text-3xl text-green-600"
                        >
                          $0.00
                        </h2>
                        <p
                          class="leading-relaxed text-gray-300"
                        >
                          Income
                        </p>
                      </div>
                    </div>
                    <div
                      class="p-4 lg:w-1/3 md:w-1/3 sm:w-full w-full"
                    >
                      <div
                        class="card_element3 px-4 py-6 rounded-lg"
                      >
                        <h2
                          class="font-medium text-3xl text-red-600"
                        >
                          $0.00
                        </h2>
                        <p
                          class="leading-relaxed text-gray-300"
                        >
                          Expense
                        </p>
                      </div>
                    </div>
                    <div
                      class="p-4 lg:w-1/3 md:w-1/3 sm:w-full w-full"
                    >
                      <div
                        class="card_element3 px-4 py-6 rounded-lg"
                      >
                        <h2
                          class="font-medium text-3xl text-gray-300"
                        >
                          $0.00
                        </h2>
                        <p
                          class="leading-relaxed text-gray-300"
                        >
                          Your balance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="lg:w-1/2 w-full pr-8 px-4 py-6"
              >
                <div
                  class="flex mb-4"
                >
                  <button
                    class="flex-grow text-gray-300 focus:outline-none p-4 text-lg card_element2"
                  >
                    <i
                      aria-hidden="true"
                      class="text-lg fa fa-list mr-2"
                    />
                    Grocery List
                  </button>
                  <button
                    class="flex-grow text-gray-300 focus:outline-none text-lg p-4 card_element hover:card_element2"
                  >
                    <i
                      aria-hidden="true"
                      class="text-lg fa fa-cart-plus mr-2"
                    />
                    Add Grocery
                  </button>
                </div>
                <div
                  class="history-list overflow-y-auto pb-40 max-h-screen block"
                >
                  <h2
                    class="text-3qxl font-bold text-center text-gray-300 mt-12"
                  >
                    There are no items in your list
                  </h2>
                </div>
                <div
                  class="add-grocery overflow-y-auto max-h-screen hidden"
                >
                  <form>
                    <div
                      class="mb-8"
                    >
                      <label
                        class="block text-gray-300 text-md font-bold mb-2"
                        for="item"
                      >
                         Grocery item 
                      </label>
                      <input
                        class="card_element2 block pr-10 w-3/4 py-4 px-4 text-gray-300 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out"
                        id="item"
                        name="item"
                        placeholder="Total"
                        required=""
                        type="text"
                        value=""
                      />
                    </div>
                    <div
                      class="mb-8"
                    >
                      <label
                        class="block text-gray-300 text-md font-bold mb-2"
                        for="amount"
                      >
                         Amount 
                      </label>
                      <input
                        class="card_element2 block pr-10 w-3/4 py-4 px-4 text-gray-300 mb-3 appearance-none leading-tight focus:outline-none focus:border-gray-500 transition duration-500 ease-in-out"
                        id="amount"
                        name="amount"
                        required=""
                        type="number"
                        value="0"
                      />
                    </div>
                    <span
                      class="text-xl font-bold text-red-600"
                    />
                    <div
                      class="mb-4 text-center"
                    >
                      <button
                        class="transition duration-500 card_element hover:card_element2 focus:outline-none focus:shadow-outline text-gray-300 font-bold py-4 px-8 mx-6"
                        type="submit"
                      >
                         Add transaction 
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocumentFragment>
  `);
});
