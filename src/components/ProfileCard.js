import React from 'react'
import DynamicText from './DynamicText'

export default function ProfileCard() {
    return (
        <div className="fixed w-full inset-0 z-50 overflow-hidden flex items-center">
            <div className="border-2 border-t-8 border-white shadow-lg modal-container bg-black md:max-w-11/12 rounded-xl overflow-y-auto ml-auto mr-auto">
                <div className="modal-content py-4 text-left px-2">
                    {/*Title*/}
                    <div className="pb-3">
                        <p className="text-white text-left my-1">C:\Users\user&gt;uname</p>
                        <p className="text-2xl font-bold text-white items-center text-left pl-2">Kelig Villalard</p>
                        <p className="text-white text-left my-1">C:\Users\user&gt;echo Développeur <DynamicText /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
