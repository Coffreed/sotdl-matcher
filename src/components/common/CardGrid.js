import * as React from 'react';
import CardElement from './CardElement';

export default function CardGrid({cardList}) {
  return (
    <div className="cardGrid">
      {cardList && cardList.map((data) => ( <CardElement key={data.id} data={data}/> ))}
    </div>
  );
}