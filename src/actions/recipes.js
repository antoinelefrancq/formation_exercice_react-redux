export const IMPORT_DATA = 'IMPORT_DATA';
export function actionImportData(result) {
  return {
    type: IMPORT_DATA,
    payload: result,
  };
}

export const FETCH_DATA = 'IMPORT_DATA';
export function actionfetchData() {
  return {
    type: FETCH_DATA,
  };
}

export const SAVE_DATA = 'SAVE_DATA';
export function actionSaveData(result) {
  return {
    type: SAVE_DATA,
    payload: result,
  };
}
