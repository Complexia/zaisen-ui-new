const IndexContainer = (props: any) => {
    return (
        <div className="border border-black rounded-lg bg-white w-80 mb-12 mr-12 flex-grow h-72 flex flex-col items-center justify-center">
            <div className="mx-auto my-auto">
                {props.children}
            </div>
        </div>
    )
}

export default IndexContainer;