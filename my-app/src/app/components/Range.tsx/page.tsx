const Range = () => {
    return(

        <div>
        <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-[#333333]  mb-1 ">Browse The Range</h1>
        <p className="text-center mb-8 max-w-xl   mx-auto text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/Hero2.png" alt="Image 1" className="w-full h-auto" />
                  <p className="text-[#333333] font-bold text-center pt-2">Dining</p>

            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/Hero3.png" alt="Image 2" className="w-full h-auto" />
                <p className="text-[#333333] font-bold text-center pt-2">Living</p>
            </div>

            

            <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/images/Hero4.png" alt="Image 3" className="w-full h-auto" />
                <p className="text-[#333333] font-bold text-center pt-2">Bedroom</p>
            </div>
        </div>
    </div>
       </div>
    )
}
export default Range