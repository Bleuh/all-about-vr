import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Card, Image } from 'antd';

import { GameShape } from '../../shape';
import './gameCard.scss';

const GameCard = (props) => {
  const {
    selected,
    item,
  } = props;

  const getGameStatus = (type) => {
    if (type === 1) return 'Action';
    if (type === 2) return 'Adventure';
    if (type === 3) return 'Shooter';
    if (type === 4) return 'Social';
    if (type === 5) return 'Puzzle';
    if (type === 6) return 'Cars simulator';
    if (type === 7) return 'Planes simulator';
    if (type === 8) return 'Experience in VR';
    return '';
  };

  return (
    <div className="headset-card">
      <a href={item.steam} target="_blank" rel="noopener noreferrer">
        <Card
          hoverable
          bordered
          title={item.name}
          className={selected ? 'selected' : ''}
          cover={<Image src={item.img} preview={false} alt={item.name} />}
        >

          <Card.Meta description={item.summary} title={getGameStatus(item.type)} />

        </Card>
      </a>

    </div>
  );
};

GameCard.propTypes = {
  selected: PropTypes.bool,
  item: GameShape,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

GameCard.defaultProps = {
  selected: false,
  item: {},
  location: PropTypes.shape({
    pathname: '/',
  }),
};

export default withRouter(GameCard);