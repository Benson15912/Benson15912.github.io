export const ProfileIcon = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <img src={`${import.meta.env.BASE_URL}/profile-pic.jpg`} alt="Profile" className="w-24 h-24 rounded-full" />
            <span className="mt-2 text-gray-800 dark:text-white">Benson</span>
        </div>
    );
};