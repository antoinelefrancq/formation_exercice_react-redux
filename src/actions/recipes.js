export const IMPORT_DATA = 'IMPORT_DATA';
export function actionImportData(result) {
  return {
    type: IMPORT_DATA,
    payload: result,
  };
}
