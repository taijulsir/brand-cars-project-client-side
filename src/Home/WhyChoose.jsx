import Rating from "react-rating";

import { HiOutlineShieldCheck,HiOutlineThumbUp,HiCreditCard,HiCurrencyDollar,HiHeart } from "react-icons/hi";

const WhyChoose = () => {
    return (
        <div className="max-w-7xl mx-auto px-3 lg:px-5 lg:py-10 my-10 bg-gradient-to-br from-pink-200 to-pink-100">

            {/* heading section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 ">

                <div className=" col-span-2">
                    <h3 className="text-2xl lg:text-5xl font-bold mb-3">Why Choose<span className="text-pink-400"> Motoz</span></h3>
                    <p className="text-[#403F3F] mb-3">Here are some of the featured in different categories</p>
                </div>
                <div className="flex gap-6 flex-col md:flex-row">

                    <div className="bg-gradient-to-br from-pink-200 to-pink-100 shadow-lg rounded-lg h-20 w-[200px] lg:px-1 py-1">
                        <div className="flex gap-2">
                            <img className=" h-6  " src="https://i.postimg.cc/902K5Gcm/155860-logo-official-google-free-download-png-hq.png" alt="" />
                            <Rating
                                className=" text-amber-500"
                                emptySymbol="fa fa-star-o"
                                fullSymbol="fa fa-star "
                            />
                        </div>
                        <p className="text-sm text-[#403F3F] pt-2">Trust Rating 5.0 <span className="text-pink-600"> |</span> 2348 Views</p>
                    </div>

                    <div className="bg-gradient-to-br from-pink-200 to-pink-100 shadow-lg rounded-lg  h-20 w-[220px] lg:px-1 py-1 ">
                        <div className="flex gap-2">
                            <img className=" h-6  " src="https://i.postimg.cc/Gpxb5J0Q/Trustpilot-Logo-2022-svg.png" alt="" />
                            <Rating
                                className=" text-green-600 "
                                emptySymbol="fa fa-star-o"
                                fullSymbol="fa fa-star "
                            />
                        </div>
                        <p className="text-sm text-[#403F3F] pt-2">Trust Rating 4.5 <span className="text-pink-600"> |</span> 2700 Views</p>
                    </div>

                </div>

            </div>

            {/* card section */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">



                <div className="py-6 px-3 lg:px-5 bg-gradient-to-bl from-pink-200 to-white shadow-xl rounded-xl">
                    <h3 className="text-2xl flex items-center font-semibold"><HiOutlineShieldCheck className="text-2xl mr-2 text-red-900"></HiOutlineShieldCheck> Safe Purchase</h3>
                    <p className="text-sm text-[#403F3F]">Ensure a safe purchase by researching the seller, using secure websites and trusted payment methods, and keeping records of transactions. Be cautious of phishing scams, read product descriptions and reviews, and monitor your accounts for any suspicious activity. Trust your instincts and use strong, unique passwords for added security.</p>
                </div>

                <div className="py-6 px-3 lg:px-5 bg-gradient-to-bl from-pink-200 to-white shadow-xl rounded-xl">
                    <h3 className="text-2xl flex items-center font-semibold"><HiCreditCard className="text-2xl mr-2 text-red-900"></HiCreditCard>90 Days Warranty</h3>
                    <p className="text-sm text-[#403F3F]">A 90-day warranty provides consumers with a guarantee of product quality and functionality for three months after purchase. During this period, any defects or issues will be repaired or replaced at no extra cost, offering peace of mind and assurance to the buyer. Its a commitment by the seller to stand behind their products.</p>
                </div>

                <div className="py-6 px-3 lg:px-5 bg-gradient-to-bl from-pink-200 to-white shadow-xl rounded-xl">
                    <h3 className="text-2xl flex items-center font-semibold"><HiOutlineThumbUp className="text-3xl mr-2 text-red-900"></HiOutlineThumbUp> Hassle & Haggle Free</h3>
                    <p className="text-sm text-[#403F3F]">A seamless and straightforward experience, whether its in shopping, negotiations, or any interaction. It means minimal stress and no need for prolonged discussions or disputes, offering convenience and efficiency to users or customers.It means minimal stress and no need for prolonged discussions or disputes.</p>
                </div>

                <div className="py-6 px-3 lg:px-5 bg-gradient-to-bl from-pink-200 to-white shadow-xl rounded-xl">
                    <h3 className="text-2xl flex items-center font-semibold"><HiHeart className="text-2xl mr-2 text-red-900"></HiHeart> 100% Guarantee</h3>
                    <p className="text-sm text-[#403F3F]">Assures customers that their satisfaction is a top priority. It promises that the product or service will meet or exceed expectations, and if not, the customer will receive a full refund or a replacement, ensuring peace of mind and trust in the purchase.assures customers that their satisfaction is a top priority.</p>
                </div>

                <div className="py-6 px-3 lg:px-5 bg-gradient-to-bl from-pink-200 to-white shadow-xl rounded-xl">
                    <h3 className="text-2xl flex items-center font-semibold"><HiCurrencyDollar className="text-2xl mr-2 text-red-900"></HiCurrencyDollar> Low Price</h3>
                    <p className="text-sm text-[#403F3F]">Low Price signifies competitive pricing that provides value for money. It indicates that the product or service is available at an affordable cost, helping customers save while maintaining quality. This makes it an attractive option for budget-conscious shoppers.Low Price signifies competitive pricing that provides value for money. </p>
                </div>
                <div className="py-6 px-3 lg:px-5 bg-gradient-to-bl from-pink-200 to-white shadow-xl rounded-xl">
                    <h3 className="text-2xl flex items-center font-semibold"><HiCreditCard className="text-2xl mr-2 text-red-900"></HiCreditCard> 90-day warranty</h3>
                    <p className="text-sm text-[#403F3F]">A 90-day warranty provides consumers with a guarantee of product quality and functionality for three months after purchase. During this period, any defects or issues will be repaired or replaced at no extra cost, offering peace of mind and assurance to the buyer. Its a commitment by the seller to stand behind their products..</p>
                </div>

            </div>

        </div>
    );
};

export default WhyChoose;