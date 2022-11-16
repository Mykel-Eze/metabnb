/* eslint-disable jsx-a11y/anchor-is-valid */
const PlaceToStay = () => {
    return (
        <div id="places-page" className="page-wrapper">
            <section id="filter-top">
                <div className="row">
                    <div className="container">
                        <div className="filter-row flex-div">
                            <ul className="filter-tabs-wrapper flex-div">
                                <li>
                                    <a href="#" className="filter-tab">Resturant</a>
                                </li>
                                <li>
                                    <a href="#" className="filter-tab">Cottage</a>
                                </li>
                                <li>
                                    <a href="#" className="filter-tab">Castle</a>
                                </li>
                                <li>
                                    <a href="#" className="filter-tab">Fantast city</a>
                                </li>
                                <li>
                                    <a href="#" className="filter-tab">Beach</a>
                                </li>
                                <li>
                                    <a href="#" className="filter-tab">Carbins</a>
                                </li>
                                <li>
                                    <a href="#" className="filter-tab">Off-grid</a>
                                </li>
                                <li>
                                    <a href="#" className="filter-tab">Farm</a>
                                </li>
                            </ul>

                            <div className="location-filter flex-div">
                                <span>Location</span>
                                <img src={require("../images/filter.svg").default} alt="filter" className="filter-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="adventure-inspiration-2">
                <div className="row">
                    <div className="container">
                        <div className="adventure-places-wrapper">
                            <div className="adventure-place-block">
                                <div className="adventure-img-wrapper">
                                    <input type="checkbox" name="adventure-place" id="adventure-1" />
                                    <label htmlFor="adventure-1">
                                        <img src={require("../images/heart-empty.svg").default}  alt="heart-empty" className="heart-empty checkbox-heart" />
                                        <img src={require("../images/heart-filled.svg").default}  alt="heart-filled" className="heart-filled checkbox-heart" />

                                        <img src={require("../images/places-images/Frame 151.jpg")} alt="adventure-img" className="adventure-img" />
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

                                        <img src={require("../images/places-images/Frame 151_1.jpg")} alt="adventure-img" className="adventure-img" />
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

                                        <img src={require("../images/places-images/Frame 151_2.jpg")} alt="adventure-img" className="adventure-img" />
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

                                        <img src={require("../images/places-images/Frame 151_3.jpg")} alt="adventure-img" className="adventure-img" />
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

                                        <img src={require("../images/places-images/Frame 151_4.jpg")} alt="adventure-img" className="adventure-img" />
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

                                        <img src={require("../images/places-images/Frame 151_5.jpg")} alt="adventure-img" className="adventure-img" />
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

                                        <img src={require("../images/places-images/Frame 151_6.jpg")} alt="adventure-img" className="adventure-img" />
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

                                        <img src={require("../images/places-images/Frame 151_7.jpg")} alt="adventure-img" className="adventure-img" />
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

                                        <img src={require("../images/places-images/Frame 151_8.jpg")} alt="adventure-img" className="adventure-img" />
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

                                        <img src={require("../images/places-images/Frame 151_9.jpg")} alt="adventure-img" className="adventure-img" />
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

                                        <img src={require("../images/places-images/Frame 151_10.jpg")} alt="adventure-img" className="adventure-img" />
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

                                        <img src={require("../images/places-images/Frame 151_11.jpg")} alt="adventure-img" className="adventure-img" />
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

                                        <img src={require("../images/places-images/Frame 151_12.jpg")} alt="adventure-img" className="adventure-img" />
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

                                        <img src={require("../images/places-images/Frame 151_13.jpg")} alt="adventure-img" className="adventure-img" />
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

                                        <img src={require("../images/places-images/Frame 151_14.jpg")} alt="adventure-img" className="adventure-img" />
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

                                        <img src={require("../images/places-images/Frame 151_15.jpg")} alt="adventure-img" className="adventure-img" />
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
        </div>
    )
}

export default PlaceToStay;