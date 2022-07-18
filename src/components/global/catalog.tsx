import { CatalogInterface } from '../../common/style';

interface Iprops {
  propsData: CatalogInterface;
}

export default function Catalog({ propsData }: Iprops) {
  const title = propsData.title.length > 27 ? propsData.title?.substring(0, 27) + '...' : propsData.title;
  const description =
    propsData.description.length > 74 ? propsData.description?.substring(0, 74) + '...' : propsData.description;
  const url = '/images/' + propsData.parent + '/' + propsData.image;

  return (
    <div className="py-1">
      <img src={url} width="100%" alt={propsData.parent} />
      <p className="font-17 wei-500 mt-2 mb-1">{title}</p>
      <div className="font-14">{description}</div>
      <button className="btn btn-main btn-border font-13 my-3 wei-500 w-100">MORE DETAILS</button>
    </div>
  );
}
