const NftWindow = (props: any) => {
  return (
    <div className="bg-white hover:bg-purple-100 transition ease-in-out delay-150 rounded-lg  border-2 border-purple-500   p-4 text-black w-[400px]">
      <div className="flex items-center justify-center">
        <img
          src={props.props.imageUrl}
          className="rounded-lg"
          style={{ width: 200, height: 200 }}
        />
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
  );
};

export default NftWindow;
