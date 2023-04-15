const NftWindow = (props: any) => {
    return (
        <div className="bg-white rounded-lg p-4 text-black">
            <div className="flex items-center justify-center">
                <img src={props.props.imageUrl} className="w-3/4 rounded-lg" />
            </div>
            <div className="mt-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold">{props.props.imageName}</h2>
                    <h2 className="text-lg font-bold">{props.props.tokenType}</h2>
                </div>
                <hr className="border-t border-black my-2" />
                <div className="flex items-center justify-between">
                    <span>{props.props.collectionName}</span>
                    <span>{props.props.contractAddress}</span>
                </div>
                <hr className="border-t border-black my-2" />
                <p className="text-sm">{props.props.description}</p>
            </div>
        </div>
    )
}

export default NftWindow;