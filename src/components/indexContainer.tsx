const IndexContainer = (props: any) => {
    return (
        <div className="border border-black rounded-lg bg-white w-80 mb-12 mr-12 flex-grow h-72 flex flex-col overflow-auto py-4 px-4">
            <div className="mx-auto">
                {props.children}
            </div>
        </div>
    )
}

export default IndexContainer;