import React from 'react';
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import './_Breadcrumbs.scss';

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname },
  } = props;

  function breadcrumbTitle() {
    if (pathname.includes('product')) {
      return props.productTitle;
    } else if (pathname.includes('cart')) {
      return 'Корзина';
    }
  }

  function getPathnames() {
    if (!pathname.includes('product')) {
      return pathname.split('/catalog').filter((x) => x);
    } else {
      return [pathname];
    }
  }
  const pathnames = getPathnames();

  function updateProductsHandler() {
    props.onUpdateProductList();
    history.push('/catalog');
  }

  return (
      !pathname.includes('aboutPage') && !pathname.includes('delivery') && !pathname.includes('return') && !pathname.includes('contact') && (
          <MUIBreadcrumbs
              className="breadcrumbsCustomStyle"
              aria-label="breadcrumb"
          >
            {pathname === '/catalog' ? (
                <Typography className="breadcrumbs">
                  Каталог <span>Товари дрібної побутової техніки</span>
                </Typography>
            ) : (
                <Link to="/catalog" onClick={updateProductsHandler}>
                  <p className="breadcrumbs breadcrumbs_active">Каталог</p>
                </Link>
            )}
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/catalog')}`;
              const isLast = index === pathnames.length - 1;
              return isLast ? (
                  <Typography className="breadcrumbs-next" key={name}>
                    {breadcrumbTitle()}
                  </Typography>
              ) : (
                  <Link key={name} onClick={() => history.push(routeTo)}>
                    {breadcrumbTitle()}
                  </Link>
              );
            })}
          </MUIBreadcrumbs>
      )
  );
};

export default withRouter(Breadcrumbs);