
const RoomUsers = ({ users }) => {
    const maxVisibleUsers = 7;
    const additionalUsers = users.length > maxVisibleUsers ? users.length - maxVisibleUsers : 0;

    return (
        <div className="bg-purple-950 text-white p-4 rounded-lg">
            <div className="flex justify-between gap-2 items-center">
                <span className="text-lg font-bold">Playing along with</span>
                <button className="text-red-500 font-semibold bg-purple-950 cursor-pointer p-0  ">leave</button>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {users.slice(0, maxVisibleUsers).map((user, index) => (
                    <div key={index} className={`flex flex-col items-center bg-purple-900 rounded-lg w-20 h-20 p-3 ${user.id === "admin" ? 'relative' : ''}`}>
                        {console.log(user)}
                        {user.id === "admin" && <img src="/crown.svg" alt="Crown" className="absolute transform rotate-45 top-0 right-0 w-8 h-8" />}
                        <img src={user.avatarUrl} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                        <span className="text-white font-semibold text-xs mt-1">{user.name}</span>
                    </div>
                ))}


                {(additionalUsers > 0) && (
                    <div className="flex flex-col gap-1 items-center justify-center bg-purple-900 rounded-md p-3 h-20 w-20">
                        <div className="flex -mr-6">
                            
                            {users.slice(maxVisibleUsers, maxVisibleUsers + 3).map((user, index) => (
                                <img
                                    key={index}
                                    src={user.avatarUrl}
                                    alt={user.name}
                                    className={`relative overlapping-content top-0 left-0 -ml-6 h-10 w-10 rounded-full object-cover`}
                                    style={{ zIndex: (10-index)*10 }}
                                />
                            ))}
                        </div>
                        <span className="text-white font-semibold text-xs">+{additionalUsers}</span>
                    </div>
                )}



                <div className="flex flex-col items-center bg-purple-900 rounded-md w-20 h-20 p-3">
                    <div className=" text-white bg-purple-900 font-bold flex items-center justify-center  cursor-pointer">
                        <img src="/plus.svg" alt="" className="h-12 w-12" />
                    </div>
                    <span className="text-white text-sm font-bold">Invite</span>
                </div>
            </div>
        </div>
    );
};


export default RoomUsers;
