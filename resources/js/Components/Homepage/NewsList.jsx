import React from "react";

const isNews = (news) => {
    return news.map((el, key) => (
        <div key={key} className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure>
                <img
                    src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{el.title}</h2>
                <p>{el.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{el.category}</div>
                    <div className="badge badge-outline">{el.author}</div>
                </div>
            </div>
        </div>
    ));
};

const noNews = () => {
    return <div>Saat ini belum ada berita tersedia</div>;
};

const NewsList = ({ news }) => {
    return !news && news.length === 0 ? noNews() : isNews(news);
};

export default NewsList;
