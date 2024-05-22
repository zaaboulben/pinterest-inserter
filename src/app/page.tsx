'use client'
import CreatePins from "@/components/form/form-create-pins";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { NextRequest, NextResponse } from "next/server";
import { useEffect } from "react";

export default  function Home() {

//   const getprofilePinterest = async () => {
//    const res = await axios.get('http://localhost:3000/api/pinterest/fetch/pins')
//     console.log('res', res);
// return res
//   }

//   useEffect(() => {
//     getprofilePinterest()
//   }, [])

  return (
    <main className="flex  flex-col items-center justify-between p-24">
    <CreatePins/>
     

    </main>
  );
}
