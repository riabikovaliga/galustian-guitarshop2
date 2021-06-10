import React from "react";
import { connect } from "react-redux";

import { ActionCreator } from "../store/action";
import { DIRECTION, FUNCTION, TYPE_SORT } from "../prop-type";

const Sort = (props) => {
  const { typeSort, direction, changeTypeSort, changeDirectionSort } = props;

  return (
    <form className="page-content__sort sort">
      <h2>Сортировать:</h2>
      <fieldset className="sort__fieldset sort__fieldset--type">
        <legend className="visually-hidden">Тип сортировки</legend>
        <input
          type="checkbox"
          className="sort__checkbox sort__checkbox--type visually-hidden"
          id="sort-price"
          checked={typeSort.price}
          onChange={() => {
            typeSort.price === typeSort.popularity
              ? changeDirectionSort({ up: true, down: false })
              : changeDirectionSort({ up: direction.up, down: direction.down });

            changeTypeSort({
              price: true,
              popularity: false,
            });
          }}
        ></input>
        <label
          htmlFor="sort-price"
          className="sort__label sort__label--type-price"
        >
          по цене
        </label>
        <input
          type="checkbox"
          id="sort-popularity"
          checked={typeSort.popularity}
          className="sort__checkbox sort__checkbox--type visually-hidden"
          onChange={() => {
            typeSort.price === typeSort.popularity
              ? changeDirectionSort({ up: true, down: false })
              : changeDirectionSort({ up: direction.up, down: direction.down });

            changeTypeSort({
              price: false,
              popularity: true,
            });
          }}
        ></input>
        <label htmlFor="sort-popularity" className="sort__label">
          по популярности
        </label>
      </fieldset>
      <fieldset className="sort__fieldset">
        <legend className="visually-hidden">Направление сортировки</legend>
        <input
          type="checkbox"
          className="sort__checkbox sort__checkbox--direction visually-hidden"
          id="sort-direction-up"
          checked={direction.up}
          onChange={() => {
            direction.up === direction.down
              ? changeTypeSort({ price: true, popularity: false })
              : changeTypeSort({
                  price: typeSort.price,
                  popularity: typeSort.popularity,
                });

            changeDirectionSort({
              up: true,
              down: false,
            });
          }}
        ></input>
        <label
          htmlFor="sort-direction-up"
          className="sort__label sort__label--direction-up"
        >
          <svg
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.583008 10.667H13.4163L6.99968 0.583659L0.583008 10.667Z"
              fill="#6C6C6C"
            />
          </svg>
          <span className="visually-hidden">по возрастанию</span>
        </label>
        <input
          type="checkbox"
          className="sort__checkbox sort__checkbox--direction visually-hidden"
          id="sort-direction-down"
          checked={direction.down}
          onChange={() => {
            direction.up === direction.down
              ? changeTypeSort({ price: true, popularity: false })
              : changeTypeSort({
                  price: typeSort.price,
                  popularity: typeSort.popularity,
                });

            changeDirectionSort({
              up: false,
              down: true,
            });
          }}
        ></input>
        <label
          htmlFor="sort-direction-down"
          className="sort__label sort__label--direction-down"
        >
          <svg
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.417 0.333008L0.583657 0.333008L7.00032 10.4163L13.417 0.333008Z"
              fill="#6C6C6C"
            />
          </svg>

          <span className="visually-hidden">по убыванию</span>
        </label>
      </fieldset>
    </form>
  );
};

Sort.propTypes = {
  typeSort: TYPE_SORT,
  direction: DIRECTION,
  changeTypeSort: FUNCTION,
  changeDirectionSort: FUNCTION,
};

const mapStateToProps = (state) => ({
  typeSort: state.SORT_STATE.typeSort,
  direction: state.SORT_STATE.direction,
});

const mapDispatchToProps = (dispatch) => ({
  changeTypeSort(value) {
    dispatch(ActionCreator.changeTypeSort(value));
  },
  changeDirectionSort(value) {
    dispatch(ActionCreator.changeDirectionSort(value));
  },
});

export { Sort };
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
