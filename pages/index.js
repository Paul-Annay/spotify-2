import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";

export default function Home() {
    return (
        <div className='bg-black h-screen overflow-hidden'>
            <Head>
                <title>Spotify</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <main className='flex'>
                <Sidebar />
                <Center />
            </main>
            <div>{/* Player */}</div>
        </div>
    );
}
