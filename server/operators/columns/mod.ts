/**
 * Use this function to extract certain columns from a row, usually in CSV, Excel or JSON data.
 *
 * @param columnHeads
 * @returns
 */

function extractColumnsByHead(columnHeads: string[]) {
  function inner(row: { [key: string]: unknown }): Array<unknown> {
    const extracted = [];

    for (const head in Object.keys(row)) {
      if (columnHeads.includes(head)) {
        extracted.push(row[head]);
      }
    }

    return extracted;
  }

  return inner;
}

export { extractColumnsByHead };
