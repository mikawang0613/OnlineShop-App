import React from 'react';
import {Route} from 'react-router-dom';
// import CollectionPreview from "../../components/preview-collection/preview-collection.component";
// import {selectCollections} from "../../redux/shop/shop.selector";
import CollectionPage from "../collection/collection.component" 
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
  
  export default ShopPage;