import PropTypes from 'prop-types';

export default function Link({route}) {
    return (
      <div>
          <li className="text-2xl hover:bg-slate-600 hover:rounded-xl hover:text-center">
              <a href={route.path}>
              {route.name}</a>
          </li>
      </div>
    )
  };

Link.propTypes = {
    route: PropTypes.object,

}

  