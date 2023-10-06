import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Pagination from "@/Components/Homepage/Pagination";

const Homepage = (props) => {
    const { title, description, news, auth } = props;

    return (
        <>
            <div className="min-h-screen bg-slate-50">
                <Head title={title} />
                <Navbar user={auth.user} />
                <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                    <NewsList news={news.data} />
                </div>
                <div className="flex justify-center items-center my-3">
                    <Pagination meta={news.meta} />
                </div>
            </div>
        </>
    );
};

export default Homepage;
