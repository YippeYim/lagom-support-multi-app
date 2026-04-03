export const ProfileButton = ({ email, label, selectedEmail, setSelectedEmail, user }) => {
    
    const getButtonStyle = () => {
        const isSelected = selectedEmail === email;
        const isSignin = user?.email === email;

        if (isSelected && isSignin) return 'bg-green-500 text-white border-green-600';

        if (isSelected) return 'bg-yellow-200 border-yellow-400';

        if (isSignin) return 'bg-green-100 border-green-300';

        return 'bg-white border-gray-200 hover:bg-gray-50';
    };

    return (
        <div className="inline-block m-1">
            <button
                className={`p-2 px-4 rounded border transition-all ${getButtonStyle()}`}
                onClick={() => setSelectedEmail(email)}
            >
                {label}
            </button>
        </div>
    );
};