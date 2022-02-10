/**
 * Arweave Gateway
 * Copyright (C) 2022 Permanent Data Solutions, Inc
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

export const resolveManifestPath = (
  { index, paths }: PathManifest,
  subpath: string | undefined
): string | undefined => {
  if (subpath && paths[subpath]) {
    return paths[subpath] ? paths[subpath].id : undefined;
  }

  if (
    !subpath &&
    index &&
    index.path &&
    paths[index.path] &&
    paths[index.path].id
  ) {
    return paths[index.path].id;
  }
};

export interface PathManifest {
  manifest: "arweave/paths";
  version: string;
  paths: {
    [key: string]: {
      id: string;
    };
  };
  index?: {
    path: string;
  };
}
