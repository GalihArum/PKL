import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import { useTable } from "react-table"
import Modal from 'react-modal';
import { CiEdit } from 'react-icons/ci';
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AiOutlineUpload } from "react-icons/ai";
import { loginCheck } from "../utils";



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0, 0.25)'
    }
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function TambahPengjuan () {

    const navigate = useNavigate();

    const [ userInfo, setUserInfo ] = useState();

    useEffect(() => {
        loginCheck ()
        setUserInfo({
            Photo: "AP-logo-1.png", 
            name: "Hasan Nursalim",
            department: "General Manager"
        });

        // localStorage.setItem("form-pengajuan", JSON.stringify({
        //     nama: "Dio Farrel",
        //     nim: "101010"
        // }))

        // alert(localStorage.getItem("form-pengajuan"))

        // localStorage.removeItem("form-pengajuan")
    }, []);

    function submit() {
        navigate("/Form")
    }


    return (
        <div>
            <Helmet>
                <title>Home - Angkasa Pura</title>
            </Helmet>
            <div className="h-screen w-screen bg-sky-300 p-5 lg:p-12 lg:py-6">
                {
                userInfo ?
                <div className="flex flex-row gap-3">
                    <div className="flex flex-col gap-3">
                        <div className="bg-white rounded-xl p-5 w-48 h-48 flex flex-col items-center justify-center">
                            <img src={userInfo.Photo} alt="logo" />
                            <b className="mt-5"></b>
                            <b>{userInfo.name}</b>
                            <span className="text-slate-600">{userInfo.department}</span>
                        </div>
                        <Sidebar active={"Tambah Ajuan"} />
                    </div>
                    <div className=" w-full flex flex-row gap-3">
                        
                        <div className="bg-white rounded-xl w-full pt-10 px-8 flex flex-col gap-1 ">
                        <div>
                            <div>Nama</div>
                            <input className="border-2 w-4/6 border-slate-400 rounded-lg px-3 text-slate-400" />
                            </div>
                            <div>
                            <div>Email</div>
                            <input className="border-2 w-4/6 border-slate-400 rounded-lg px-3 text-slate-400"/>
                            </div>
                            <div>
                            <div>Asal Sekolah / Universitas</div>
                            <input className="border-2 w-4/6 border-slate-400 rounded-xl px-3 text-slate-400" />
                            </div>
                            <div>
                            <div>Bidang Keilmuan</div>
                            <input className="border-2 w-4/6 border-slate-400 rounded-xl px-3 text-slate-400" />
                            </div>
                            <div>
                            <div>Unit Kerja</div>
                            <input className="border-2 w-4/6 border-slate-400 rounded-xl px-3 text-slate-400" />
                            </div>
                            <div>
                            <div>Tanggal Mulai</div>
                            <input className="border-2 w-4/6 border-slate-400 rounded-xl px-3 text-slate-400"/>
                            </div>
                            <div>
                            <div>Tanggal Selesai</div>
                            <input className="border-2 w-4/6 border-slate-400 rounded-xl px-3 text-slate-400" />
                            </div>                            <div>
                            <div>Jumlah Anggota Kelompok</div>
                            <input className="border-2 w-4/6 border-slate-400 rounded-xl px-3 text-slate-400" />
                            </div>
                            <div>
                            <button className="mt-2 w-1/4 border-2 border-black rounded-xl px-3 py-1 gap-1 flex items-center justify-center">< AiOutlineUpload className="text-2xl py-1 "/><span>Upload Surat Pengantar</span></button>
                            </div>
                            <div className="flex items-center justify-center gap-6 mt-5">
                            <button className="mt-2 w-2/6 bg-blue-600 rounded-xl text-white px-10 py-2" onClick={submit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                : "Loading..."
            }
            </div>
        </div>
    )
}