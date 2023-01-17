import React, {Fragment} from "react";
import {ListeVoyages} from "../view/ListeVoyages";
import {VoyageViewModel} from "../vueModel/VoyageViewModel";

export const VoyageModel = () => {
  const viewModel = VoyageViewModel();

  const updateInfo = (id, info) => {
    viewModel.updateDestination(id, info);
  };

  return (
    <Fragment>
      <h3>liste de voyages</h3>
      <ListeVoyages
        destination={viewModel.destination}
        startClock={viewModel.setTime}
        update={updateInfo}
      />
    </Fragment>
  );
};
