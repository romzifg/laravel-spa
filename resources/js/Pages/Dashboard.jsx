import { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard({ auth, flash, my_news }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = { title, description, category };
        Inertia.post("/news", data);
        setIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    useEffect(() => {
        if (!my_news) {
            Inertia.get("/news");
        }
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    My News
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">
                        {isNotif && (
                            <div className="alert alert-info">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="stroke-current shrink-0 w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                                <span>{flash.message}</span>
                            </div>
                        )}
                        <input
                            type="text"
                            placeholder="Title"
                            onChange={(v) => setTitle(v.target.value)}
                            className="m-2 input input-bordered w-full bg-transparent"
                            value={title}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            onChange={(v) => setDescription(v.target.value)}
                            className="m-2 input input-bordered w-full bg-transparent"
                            value={description}
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            onChange={(v) => setCategory(v.target.value)}
                            className="m-2 input input-bordered w-full bg-transparent"
                            value={category}
                        />
                        <button
                            className="btn btn-primary m-2"
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                    <div className="p-4">
                        {my_news.length > 0 ? (
                            my_news.map((el, key) => (
                                <div
                                    key={key}
                                    className="card w-full bg-white shadow-xl m-2"
                                >
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {el.title}
                                        </h2>
                                        <p>{el.description}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">
                                                {el.category}
                                            </div>
                                            <div className="badge badge-outline">
                                                <Link
                                                    href={route("edit.news")}
                                                    method="get"
                                                    data={{ id: el.id }}
                                                    as="button"
                                                >
                                                    edit
                                                </Link>
                                            </div>
                                            <div className="badge badge-outline">
                                                delete
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No Data</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
