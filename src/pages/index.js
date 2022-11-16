const Home = () => {
    return (
        <div id="home-page" className="page-wrapper">
            <section id="home">
                <div className="row">
                    <div className="container">
                        <div className="home-content">
                            <div className="home-text-side">
                                <h1 className="home-title">
                                    Rent a <span className="pry-color">Place</span> away from
                                    <span className="pry-color"> Home</span> in the <span className="pry-color">Metaverse</span>
                                </h1>
                                <p className="home-desc">
                                    we provide you access to luxury and affordable houses in the metaverse, get a chance to
                                    turn your imagination to reality at your comfort zone
                                </p>

                                <form action="/places-to-stay" className="search-location-form flex-div">
                                    <input type="text" id="search-location-field" placeholder="Search for location" required />
                                    <button className="submit-search-btn">Search</button>
                                </form>
                            </div>
                            <div className="home-img-side">
                                <img src={require("../images/home-imgs.png")} alt="home-img" className="home-img" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="partners-row pry-bg">
                    <div className="container">
                        <div className="flex-div justify-content-btw">
                            <img src={require("../images/mb-token.svg").default} alt="MBToken" className="partner-img" />
                            <img src={require("../images/metamask.svg").default} alt="Metamask" className="partner-img" />
                            <img src={require("../images/opensea.svg").default} alt="OpenSea" className="partner-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="adventure-inspiration">
                <div className="row">
                    <div className="container">
                        <h1 className="section-title center">Inspiration for your next adventure</h1>

                        <div className="adventure-places-wrapper">
                            <div className="adventure-place-block">
                                <div className="adventure-img-wrapper">
                                    <input type="checkbox" name="adventure-place" id="adventure-1" />
                                    <label htmlFor="adventure-1">
                                        <img src={require("../images/heart-empty.svg").default}  alt="heart-empty" className="heart-empty checkbox-heart" />
                                        <img src={require("../images/heart-filled.svg").default}  alt="heart-filled" className="heart-filled checkbox-heart" />

                                        <img src={require("../images/adventure-1.jpg")} alt="adventure-img" className="adventure-img" />
                                    </label>
                                </div>
                                <div className="adventure-details-wrapper">
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">Desert king</div>
                                        <div className="adventure-details-item bold-txt">1MBT per night</div>
                                    </div>
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">2345km away</div>
                                        <div className="adventure-details-item">available for 2weeks stay</div>
                                    </div>
                                    <div className="stars-rating flex-div">
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                    </div>
                                </div>
                            </div>
                            <div className="adventure-place-block">
                                <div className="adventure-img-wrapper">
                                    <input type="checkbox" name="adventure-place" id="adventure-2" />
                                    <label htmlFor="adventure-2">
                                        <img src={require("../images/heart-empty.svg").default}  alt="heart-empty" className="heart-empty checkbox-heart" />
                                        <img src={require("../images/heart-filled.svg").default}  alt="heart-filled" className="heart-filled checkbox-heart" />

                                        <img src={require("../images/adventure-2.jpg")} alt="adventure-img" className="adventure-img" />
                                    </label>
                                </div>
                                <div className="adventure-details-wrapper">
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">Desert king</div>
                                        <div className="adventure-details-item bold-txt">1MBT per night</div>
                                    </div>
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">2345km away</div>
                                        <div className="adventure-details-item">available for 2weeks stay</div>
                                    </div>
                                    <div className="stars-rating flex-div">
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                    </div>
                                </div>
                            </div>
                            <div className="adventure-place-block">
                                <div className="adventure-img-wrapper">
                                    <input type="checkbox" name="adventure-place" id="adventure-3" />
                                    <label htmlFor="adventure-3">
                                        <img src={require("../images/heart-empty.svg").default}  alt="heart-empty" className="heart-empty checkbox-heart" />
                                        <img src={require("../images/heart-filled.svg").default}  alt="heart-filled" className="heart-filled checkbox-heart" />

                                        <img src={require("../images/adventure-3.jpg")} alt="adventure-img" className="adventure-img" />
                                    </label>
                                </div>
                                <div className="adventure-details-wrapper">
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">Desert king</div>
                                        <div className="adventure-details-item bold-txt">1MBT per night</div>
                                    </div>
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">2345km away</div>
                                        <div className="adventure-details-item">available for 2weeks stay</div>
                                    </div>
                                    <div className="stars-rating flex-div">
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                    </div>
                                </div>
                            </div>
                            <div className="adventure-place-block">
                                <div className="adventure-img-wrapper">
                                    <input type="checkbox" name="adventure-place" id="adventure-4" />
                                    <label htmlFor="adventure-4">
                                        <img src={require("../images/heart-empty.svg").default}  alt="heart-empty" className="heart-empty checkbox-heart" />
                                        <img src={require("../images/heart-filled.svg").default}  alt="heart-filled" className="heart-filled checkbox-heart" />

                                        <img src={require("../images/adventure-4.jpg")} alt="adventure-img" className="adventure-img" />
                                    </label>
                                </div>
                                <div className="adventure-details-wrapper">
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">Desert king</div>
                                        <div className="adventure-details-item bold-txt">1MBT per night</div>
                                    </div>
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">2345km away</div>
                                        <div className="adventure-details-item">available for 2weeks stay</div>
                                    </div>
                                    <div className="stars-rating flex-div">
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                    </div>
                                </div>
                            </div>
                            <div className="adventure-place-block">
                                <div className="adventure-img-wrapper">
                                    <input type="checkbox" name="adventure-place" id="adventure-5" />
                                    <label htmlFor="adventure-5">
                                        <img src={require("../images/heart-empty.svg").default}  alt="heart-empty" className="heart-empty checkbox-heart" />
                                        <img src={require("../images/heart-filled.svg").default}  alt="heart-filled" className="heart-filled checkbox-heart" />

                                        <img src={require("../images/adventure-5.jpg")} alt="adventure-img" className="adventure-img" />
                                    </label>
                                </div>
                                <div className="adventure-details-wrapper">
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">Desert king</div>
                                        <div className="adventure-details-item bold-txt">1MBT per night</div>
                                    </div>
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">2345km away</div>
                                        <div className="adventure-details-item">available for 2weeks stay</div>
                                    </div>
                                    <div className="stars-rating flex-div">
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                    </div>
                                </div>
                            </div>
                            <div className="adventure-place-block">
                                <div className="adventure-img-wrapper">
                                    <input type="checkbox" name="adventure-place" id="adventure-6" />
                                    <label htmlFor="adventure-6">
                                        <img src={require("../images/heart-empty.svg").default}  alt="heart-empty" className="heart-empty checkbox-heart" />
                                        <img src={require("../images/heart-filled.svg").default}  alt="heart-filled" className="heart-filled checkbox-heart" />

                                        <img src={require("../images/adventure-6.jpg")} alt="adventure-img" className="adventure-img" />
                                    </label>
                                </div>
                                <div className="adventure-details-wrapper">
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">Desert king</div>
                                        <div className="adventure-details-item bold-txt">1MBT per night</div>
                                    </div>
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">2345km away</div>
                                        <div className="adventure-details-item">available for 2weeks stay</div>
                                    </div>
                                    <div className="stars-rating flex-div">
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                    </div>
                                </div>
                            </div>
                            <div className="adventure-place-block">
                                <div className="adventure-img-wrapper">
                                    <input type="checkbox" name="adventure-place" id="adventure-7" />
                                    <label htmlFor="adventure-7">
                                        <img src={require("../images/heart-empty.svg").default}  alt="heart-empty" className="heart-empty checkbox-heart" />
                                        <img src={require("../images/heart-filled.svg").default}  alt="heart-filled" className="heart-filled checkbox-heart" />

                                        <img src={require("../images/adventure-7.jpg")} alt="adventure-img" className="adventure-img" />
                                    </label>
                                </div>
                                <div className="adventure-details-wrapper">
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">Desert king</div>
                                        <div className="adventure-details-item bold-txt">1MBT per night</div>
                                    </div>
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">2345km away</div>
                                        <div className="adventure-details-item">available for 2weeks stay</div>
                                    </div>
                                    <div className="stars-rating flex-div">
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                    </div>
                                </div>
                            </div>
                            <div className="adventure-place-block">
                                <div className="adventure-img-wrapper">
                                    <input type="checkbox" name="adventure-place" id="adventure-8" />
                                    <label htmlFor="adventure-8">
                                        <img src={require("../images/heart-empty.svg").default}  alt="heart-empty" className="heart-empty checkbox-heart" />
                                        <img src={require("../images/heart-filled.svg").default}  alt="heart-filled" className="heart-filled checkbox-heart" />

                                        <img src={require("../images/adventure-8.jpg")} alt="adventure-img" className="adventure-img" />
                                    </label>
                                </div>
                                <div className="adventure-details-wrapper">
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">Desert king</div>
                                        <div className="adventure-details-item bold-txt">1MBT per night</div>
                                    </div>
                                    <div className="flex-div justify-content-btw">
                                        <div className="adventure-details-item">2345km away</div>
                                        <div className="adventure-details-item">available for 2weeks stay</div>
                                    </div>
                                    <div className="stars-rating flex-div">
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                        <img src={require("../images/star.svg").default}  alt="star" className="star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="nft" className="pry-bg">
                <div className="row">
                    <div className="container">
                        <div className="nft-section-content">
                            <div className="nft-txt-side">
                                <h1 className="nft-section-title">Metabnb NFTs</h1>
                                <p className="nft-section-desc">
                                    Discover our NFT gift cards collection. Loyal customers gets amazing gift cards
                                    which are traded as NFTs. These NFTs gives our cutomer access to loads of our
                                    exclusive services.
                                </p>
                                <button className="nft-section-btn">Learn more</button>
                            </div>
                            <div className="nft-img-side">
                                <img src={require("../images/nfts.png")} alt="nfts" className="nft-section-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;