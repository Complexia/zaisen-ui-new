const IndexContainer = (props: any) => {
    return (
        <div className="relative border border-black rounded-lg bg-white mb-12 mr-12 flex-grow h-128 flex flex-col overflow-auto py-4 px-4 w-full">
            <div className="mx-auto">
                {props.children}
            </div>
        </div>
    )
}

export default IndexContainer;