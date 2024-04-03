import React from 'react';
const assetImage = require('../assets/assets.png')
const promoteImage = require('../assets/promote.png')
const helpImage = require('../assets/help.png')
const productImage = require('../assets/product.png')
const customersImage = require('../assets/customers.png')
const evanvoImage = require('../assets/evano.png')
function SideBar() {
    return (
        <div className='bg-side position-relative p-3 d-flex justify-content-between flex-column'>
            <div>

                <div className='d-flex text-big '>
                    <div className='white-color pad-top-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-nut" viewBox="0 0 16 16">
                            <path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1z" />
                            <path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33m-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z" />
                        </svg>
                    </div>
                    <div className='ml-1 mt-1 font-25-px'>
                        Dashboard
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='d-flex  p-2 bg-highlight br-2' >
                        <div className='white-color'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-nut" viewBox="0 0 16 16">
                                <path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1z" />
                                <path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33m-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z" />
                            </svg>
                        </div>
                        <div className='mar-left-7'>
                            Dashboard
                        </div>
                    </div>
                    <div>

                        <div className='d-flex  p-2 justify-content-between' >
                            <div className='d-flex'>
                                <div className='white-color'>
                                    <img alt='' className='hw-16' src={productImage} />
                                </div>
                                <div className='mar-left-7'>
                                    Product
                                </div>
                            </div>
                            <div className=''>
                                <span className='float-right'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className='d-flex  p-2 justify-content-between' >
                            <div className='d-flex'>

                                <div className='white-color'>
                                    <img alt='' className='hw-16' src={customersImage} />
                                </div>
                                <div className='mar-left-7'>
                                    Customers
                                </div>
                            </div>
                            <div className=''>
                                <span className='float-right'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className='d-flex  p-2 justify-content-between' >
                            <div className='d-flex'>

                                <div className='white-color'>
                                    <img alt='' className='hw-16' src={assetImage} />

                                </div>
                                <div className='mar-left-7'>
                                    Income
                                </div>
                            </div>
                            <div className=''>
                                <span className='float-right'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className='d-flex  p-2 justify-content-between' >
                            <div className='d-flex'>

                                <div className='white-color'>
                                    <img alt='' className='hw-16' src={promoteImage} />

                                </div>
                                <div className='mar-left-7'>
                                    Promote
                                </div>
                            </div>
                            <div className=''>
                                <span className='float-right'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className='d-flex  p-2 justify-content-between' >
                            <div className='d-flex'>

                                <div className='white-color'>
                                    <img alt='' className='hw-16' src={helpImage} />

                                </div>
                                <div className='mar-left-7'>
                                    Help
                                </div>
                            </div>
                            <div className=''>
                                <span className='float-right'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-big bg-highlight br-2'>
                <div className='d-flex  align-center justify-content-between px-2'>
                    <div className=' d-flex' >
                        <div className='white-color pad-top-6'>
                            <img className='hw-20' src={evanvoImage} alt='' />
                        </div>
                        <div className='ml-1 mt-1 font-25-px'>
                            <div className='font-16 bold'>
                                Evano
                            </div>
                            <div className='font-16'>
                                Project Manager
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar