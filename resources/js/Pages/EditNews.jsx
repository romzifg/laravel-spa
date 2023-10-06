import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

const EditNews = ({ title, auth }) => {
    return (
        <>
            <div className="min-h-screen bg-slate-50">
                <Head title={title} />
                <Navbar user={auth.user} />
            </div>
        </>
    );
};

export default EditNews;
