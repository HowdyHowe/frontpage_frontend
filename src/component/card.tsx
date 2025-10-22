export default function Card() {
    return (
        <div className="relative flex flex-col items-center justify-start w-full h-[425px] mb-[30px] border lg:w-[425px]">
            {/* <div className="w-full h-full bg-red-400 rounded-sm"/> */}
            <img src={"/image1.jpg"} alt="Image" className="w-full h-full bg-red-400 object-cover rounded-sm" loading="lazy"/>
            <div className="flex flex-col w-full h-[125px] items-center justify-between p-5">
                <p className="mt-2">Lorem Ipsum</p>
                <p className="text-xs font-light align-middle">contoh text content content content</p>
                <div className="flex flex-row w-full items-center justify-between">
                    <p>$.200</p>
                    <p>Buy Now</p>
                </div>
            </div>

            {/* <div className="flex flex-col w-full h-[125px] items-center justify-between p-5">
                <p className="mt-2">Contoh Barang</p>
                <p className="text-xs font-light align-middle">contoh text content content content</p>
                <div className="flex flex-row w-full items-center justify-between">
                    <p>$.200</p>
                    <p>Buy Now</p>
                </div>
            </div> */}
        </div>
    )
};