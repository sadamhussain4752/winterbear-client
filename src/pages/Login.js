import React, { useState, useEffect } from "react";

const login = () => {
    return (
    <span className="bg-white flex flex-col pb-8">
    <div className="bg-white self-stretch flex w-full items-center justify-between gap-5 px-20 py-6 max-md:max-w-full max-md:flex-wrap max-md:px-5">
      <span className="flex items-stretch justify-between gap-5 my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5dfa04350b0943557aa8f977b5f8e390503c655c4758c49defe63fb23515e51?"
          className="aspect-[1.59] object-contain object-center w-[35px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-indigo-950 text-base font-semibold leading-4 uppercase self-center my-auto">
          Shop All
        </div>
      </span>
      <div className="self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-[6.29] object-contain object-center w-[220px] overflow-hidden"
        />
        <span className="bg-rose-100 flex items-stretch gap-4 px-6 py-1.5 rounded-xl self-start max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eac068068844dc11bc7bc89b76a4aa09c75d396da651495708b4ce19ec619be?"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-neutral-400 text-sm leading-4 self-center grow whitespace-nowrap my-auto">
            Search
          </div>
        </span>
        <span className="justify-center items-start self-center flex gap-4 my-auto">
          <div className="text-black text-base font-semibold leading-4 self-center grow whitespace-nowrap my-auto">
            Log-in
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f770121ec17ec6291c515a7072b3b51c42ecbf4a4138b4dab716aec58b2e0c5?"
            className="aspect-[0.07] object-contain object-center w-px stroke-[1px] stroke-zinc-500 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <div className="text-black text-base font-semibold leading-4 self-center my-auto">
            Register
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b99655c7cdf893de9d50d3e19dbce47c93ce08c218a624f41facfa76c307c957?"
            className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </span>
      </div>
    </div>
    <div className="self-stretch flex w-full flex-col mt-28 px-20 items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
      <span className="flex w-[803px] max-w-full items-center justify-between gap-5 ml-5 max-md:flex-wrap">
        <span className="items-stretch flex justify-between gap-5 my-auto">
          <div className="text-black text-sm leading-5">Home</div>
          <div className="text-black text-sm leading-5">My Account</div>
        </span>
        <div className="text-gray-900 text-center text-7xl leading-[100px] self-stretch grow shrink basis-auto max-md:text-4xl">
          My Account
        </div>
      </span>
      <div className="bg-neutral-100 self-stretch flex items-stretch justify-between gap-5 ml-5 mr-5 mt-5 px-14 py-10 rounded-xl max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:px-5">
        <span className="flex basis-[0%] flex-col items-stretch mt-11 self-start max-md:mt-10">
          <div className="text-black text-xl font-medium leading-6 whitespace-nowrap">
            Manage My Account
          </div>
          <div className="text-black text-base leading-6 mt-4">
            My Profile
          </div>
          <div className="text-black text-base leading-6 mt-3">
            Payment Options
          </div>
          <div className="text-black text-xl leading-6 mt-9">Address</div>
          <div className="text-black text-xl leading-6 mt-10">Orders</div>
          <div className="text-black text-xl leading-6 mt-10">Logout</div>
        </span>
        <div className="bg-stone-300 w-px shrink-0 h-[489px] mt-10 self-start" />
        <span className="rounded shadow-sm bg-white flex grow basis-[0%] flex-col px-20 py-11 max-md:max-w-full max-md:px-5">
          <div className="text-black text-xl font-medium leading-7 self-stretch max-md:max-w-full">
            Edit Your Profile
          </div>
          <div className="items-stretch self-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
            <span className="items-stretch flex grow basis-[0%] flex-col">
              <div className="text-black text-base leading-6">First Name</div>
              <div className="bg-neutral-100 flex shrink-0 h-[50px] flex-col mt-2 rounded-xl" />
            </span>
            <span className="items-stretch flex grow basis-[0%] flex-col">
              <div className="text-black text-base leading-6">Last Name</div>
              <div className="bg-neutral-100 flex shrink-0 h-[50px] flex-col mt-2 rounded-xl" />
            </span>
          </div>
          <div className="items-stretch self-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
            <span className="items-stretch flex grow basis-[0%] flex-col">
              <div className="text-black text-base leading-6">Email</div>
              <div className="bg-neutral-100 flex shrink-0 h-[50px] flex-col mt-2 rounded-xl" />
            </span>
            <span className="items-stretch flex grow basis-[0%] flex-col">
              <div className="text-black text-base leading-6">Phone No.</div>
              <div className="bg-neutral-100 flex shrink-0 h-[50px] flex-col mt-2 rounded-xl" />
            </span>
          </div>
          <div className="text-black text-base leading-6 self-stretch mt-8 max-md:max-w-full">
            Address
          </div>
          <div className="bg-neutral-100 self-stretch flex shrink-0 h-[50px] flex-col mt-3.5 rounded-xl max-md:max-w-full" />
          <div className="text-black text-base leading-6 self-stretch mt-6 max-md:max-w-full">
            Password Changes
          </div>
          <span className="text-black text-base leading-6 whitespace-nowrap bg-neutral-100 self-stretch justify-center mt-2 pl-4 pr-16 py-5 rounded-xl items-start max-md:max-w-full max-md:pr-5">
            Current Passwod
          </span>
          <span className="text-black text-base leading-6 whitespace-nowrap bg-neutral-100 self-stretch justify-center mt-4 pl-4 pr-16 py-5 rounded-xl items-start max-md:max-w-full max-md:pr-5">
            New Passwod
          </span>
          <span className="text-black text-base leading-6 whitespace-nowrap bg-neutral-100 self-stretch justify-center mt-4 pl-4 pr-16 py-5 rounded-xl items-start max-md:max-w-full max-md:pr-5">
            Confirm New Passwod
          </span>
          <span className="flex items-center justify-between gap-5 mt-11 self-end max-md:mt-10">
            <div className="text-black text-base leading-6 my-auto">
              Cancel
            </div>
            <span className="text-rose-100 text-base font-light whitespace-nowrap justify-center items-stretch bg-indigo-950 self-stretch grow px-7 py-3 rounded-[40px] max-md:px-5">
              Save Chnages
            </span>
          </span>
        </span>
      </div>
    </div>
    <div className="self-stretch z-[1] flex items-stretch justify-between gap-0 mt-20 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/baab78913a637e3d6c702f122ab2da04c0d9252f3114148b8f9568a7a3499b26?"
        className="aspect-[1.25] object-contain object-center w-10 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1c6158f8541c1a9340c5c153c379fc2ab094055c9775022d2f619d093cb6a1a?"
        className="aspect-[2.5] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/54472efcc14185fa1380fe8eaa1a81d6018e0f6a32b04c20f4fa823dc4b50cb0?"
        className="aspect-[1.25] object-contain object-center w-10 overflow-hidden shrink-0 max-w-full rounded-[50%]"
      />
    </div>
    <div className="bg-indigo-950 self-stretch flex w-full flex-col items-center pt-12 px-16 max-md:max-w-full max-md:px-5">
      <div className="z-[1] flex mb-0 w-full max-w-[1128px] flex-col items-stretch mt-5 max-md:max-w-full max-md:mb-2.5">
        <div className="self-center w-full max-w-[1008px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0">
              <div className="grow max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
                    <span className="flex grow flex-col items-stretch max-md:mt-10">
                      <div className="text-white text-center text-3xl leading-8 tracking-wide underline capitalize">
                        Quick links
                      </div>
                      <div className="flex items-stretch justify-between gap-5 mt-9 px-px">
                        <span className="flex flex-col items-stretch">
                          <div className="text-white text-base leading-5 uppercase">
                            Home
                          </div>
                          <div className="text-white text-base leading-5 uppercase mt-7">
                            shop
                          </div>
                          <div className="text-white text-base leading-5 uppercase whitespace-nowrap mt-7">
                            bearclub
                          </div>
                          <div className="text-white text-base leading-5 uppercase whitespace-nowrap mt-7">
                            About
                          </div>
                          <div className="text-white text-base leading-5 uppercase mt-7">
                            faq
                          </div>
                        </span>
                        <span className="flex flex-col items-stretch mt-1.5 self-start">
                          <div className="text-white text-base leading-5 uppercase whitespace-nowrap">
                            my account
                          </div>
                          <div className="text-white text-base leading-5 uppercase mt-7">
                            wishlist
                          </div>
                          <div className="text-white text-base leading-5 uppercase whitespace-nowrap mt-7">
                            our stores
                          </div>
                          <div className="text-white text-base leading-5 uppercase mt-6">
                            events
                          </div>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
                    <span className="flex flex-col items-stretch max-md:mt-10">
                      <div className="text-white text-3xl leading-8 tracking-wide underline capitalize whitespace-nowrap">
                        Important links
                      </div>
                      <div className="text-white text-base leading-5 uppercase mt-7">
                        privacy policy
                      </div>
                      <div className="text-white text-base leading-5 uppercase mt-7">
                        shipping policy
                      </div>
                      <div className="text-white text-base leading-5 uppercase whitespace-nowrap mt-7">
                        terms & conditions
                      </div>
                      <div className="text-white text-base leading-5 uppercase mt-7">
                        returns & refunds
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow items-stretch justify-between gap-5 max-md:mt-10">
                <span className="flex flex-col items-stretch">
                  <div className="text-white text-center text-3xl leading-8 tracking-wide underline capitalize whitespace-nowrap">
                    Shop by
                  </div>
                  <div className="text-white text-base leading-5 uppercase mt-7">
                    BT21
                  </div>
                  <div className="text-white text-base leading-5 uppercase whitespace-nowrap mt-7">
                    line friends
                  </div>
                  <div className="text-white text-base leading-5 uppercase whitespace-nowrap mt-7">
                    the smurfs
                  </div>
                  <div className="text-white text-base leading-5 uppercase whitespace-nowrap mt-7">
                    viz media
                  </div>
                  <div className="text-white text-base leading-5 uppercase mt-7">
                    naruto
                  </div>
                </span>
                <span className="self-center flex flex-col items-stretch my-auto">
                  <div className="text-white text-base leading-5 uppercase">
                    banpresto
                  </div>
                  <div className="text-white text-base leading-5 uppercase whitespace-nowrap mt-7">
                    Disney & marvel
                  </div>
                  <div className="text-white text-base leading-5 uppercase whitespace-nowrap mt-7">
                    k-pop albums
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-[5.92] object-contain object-center w-[456px] overflow-hidden self-center z-[1] max-w-full mt-9"
        />
        <div className="flex-col text-white text-center text-base leading-5 relative whitespace-nowrap overflow-hidden min-h-[365px] w-full items-center pt-7 pb-64 px-16 max-md:max-w-full max-md:pb-10 max-md:px-5">
          <img
            loading="lazy"
            srcSet="..."
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          Official BT21 & LINE FRIENDS Merchandise in India
        </div>
      </div>
    </div>
    <div className="text-black text-center text-lg font-semibold self-center whitespace-nowrap mt-36 max-md:mt-10">
      © 2023 Digital Partners IM Solutions
    </div>
  </span>
  )
}

export default login