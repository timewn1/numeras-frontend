import { useState } from 'react';

import Catalog from '../global/catalog';

import AutoMobileData from '../../assets/json/autoMobile.json';

import { CatalogInterface } from '../../common/style';

export default function AutoMobile() {
  const [autoMobile, setAutoMobileData] = useState<CatalogInterface[]>(AutoMobileData as any);

  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <div className="font-22">Automobiles</div>
        <button className="btn btn-main font-13 wei-500 px-0">VIEW AUTOMOBILES CATALOG</button>
      </div>
      <div className="row">
        {autoMobile.map((data: CatalogInterface, ind: number) => (
          <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" key={ind}>
            <Catalog propsData={{ ...data, parent: 'automobile' }} />
          </div>
        ))}
      </div>
    </>
  );
}
