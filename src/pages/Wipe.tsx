import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePuterStore } from "../lib/puter";

const WipeApp = () => {
    const { auth, isLoading, error,fs,kv } = usePuterStore();
    const navigate = useNavigate();
    const [files, setFiles] = useState<FSItem[]>([]);

    const loadFiles = async () => {
        const files = (await fs.readDir("./")) as FSItem[];
        setFiles(files);
    };

    useEffect(() => {
        loadFiles();
    }, []);

    useEffect(() => {
        if (!isLoading && !auth.isAuthenticated) {
            navigate("/auth?next=/wipe");
        }
    }, [isLoading]);

    const handleDelete = async () => {
        files.forEach(async (file) => {
            await fs.delete(file.path);
        });
        await kv.flush();
        loadFiles();
        navigate("/")
    };

    if (isLoading) {
        return <div className="dark:text-gray-200 text-neutral-800">Loading...</div>;
    }

    if (error) {
        return <div>Error {error}</div>;
    }

    return (
        <div className="items-center flex flex-col gap-5 bg-blue-100 text-neutral-800 dark:bg-neutral-800 h-screen w-screen dark:text-gray-200 pt-7">
            Authenticated as: {auth.user?.username.toUpperCase()}
            <div className="text-neutral-800 dark:text-gray-200">Existing files:</div>
            <div className="flex flex-col gap-4 dark:text-gray-200">
                {files.map((file) => (
                    <div key={file.id} className="flex flex-row gap-4 text-neutral-800 dark:text-gray-200">
                        <p>{file.name}</p>
                    </div>
                ))}
            </div>
            <div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                    onClick={() => handleDelete()}
                >
                    Wipe App Data
                </button>
            </div>
        </div>
    );
};

export default WipeApp;