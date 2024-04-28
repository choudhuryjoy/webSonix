const MusicPlayer = () => {
    return (
        <div
            className="h-screen bg-cover relative flex flex-col justify-end"
            style={{
                backgroundImage: 'url(images.jpeg)',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950 to-purple-900 opacity-90" />
            <div className="relative h-full flex flex-col items-center justify-center p-2 ">
                <div className="flex items-center justify-between mb-2">
                    <img
                        src="images.jpeg"
                        alt="Album Cover"
                        className="w-32 h-32 rounded-md mr-4"
                    />
                    <div className="flex flex-col text-left mb-8">
                        <h2 className="text-white font-bold text-xs mb-2">Now Playing</h2>
                        <h1 className="text-white text-3xl font-semibold mb-1">Kabira (Encore)</h1>
                        <p className="text-white font-bold text-xs">Arijit Singh, Harshdeep Kaur</p>
                    </div>
                </div>
                <div className="mt-3 -ml-14 flex ">
                    {Array(18).fill(null).map((_, index) => (
                        <img
                            key={index}
                            src="/sound.svg"
                            className="h-4 w-4"
                            alt=""
                        />
                    ))}
                </div>
                <div className="mt-5 flex -ml-48 right-0 gap-2">
                    <img src="/heart.svg" className="h-6 w-6" alt="" />
                    <img src="/back.svg" className="h-6 w-6" alt="" />
                    <img src="/pause.svg" className="h-6 w-6" alt="" />
                    <img src="/next.svg" className="h-6 w-6" alt="" />
                    <img src="/chart.svg" className="h-6 w-6" alt="" />
                </div>

                <div className="flex flex-col w-full rounded-md mt-7">
                    <div className="flex flex-col bg-purple-950 text-white mb-2 text-left p-4 rounded-lg">
                        <div className="items-center">
                            <p className="text-white  ">Balam Pichkari</p>
                        </div>
                        <div className="">
                            <p className="text-xs">Pritam, Benny Dayal, Shefali Alvares <span className="text-gray-400">4:48</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-purple-950 text-white mb-2 text-left p-4 rounded-lg">
                        <div className="items-center">
                            <p className="text-white  ">Balam Pichkari</p>
                        </div>
                        <div className="">
                            <p className="text-xs">Pritam, Benny Dayal, Shefali Alvares <span className="text-gray-400">4:48</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-purple-950 text-white mb-2 text-left p-4 rounded-lg">
                        <div className="items-center">
                            <p className="text-white  ">Balam Pichkari</p>
                        </div>
                        <div className="">
                            <p className="text-xs">Pritam, Benny Dayal, Shefali Alvares <span className="text-gray-400">4:48</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-purple-800 text-white mb-2 text-left p-4 rounded-lg">
                        <div className="items-center">
                            <p className="text-white  ">Kabira (Encore)</p>
                        </div>
                        <div className="">
                            <p className="text-xs">Arijit Singh, Harshdeep kaur <span className="text-gray-400">4:48</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
