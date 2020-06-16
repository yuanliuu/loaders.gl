// Sets up aliases for file reader

/* eslint-disable @typescript-eslint/no-var-requires */

import ALIASES from './aliases.js';
import {_addAliases} from '@loaders.gl/loader-utils';
import {installFilePolyfills} from '@loaders.gl/polyfills';

const TEST_CORE = false;
const TEST_IMAGES = false;
const TEST_MESHES = false;
const TEST_SCENEGRAPHS = false;
const TEST_TILES = false;
const TEST_GEOSPATIAL = false;
const TEST_TABLES = false;
const TEST_ARCHIVES = true;

_addAliases(ALIASES);
// Install polyfills (primarily for Node)
installFilePolyfills();

// Utility modules
import '@loaders.gl/polyfills/test';
import '@loaders.gl/worker-utils/test';
import '@loaders.gl/math/test';

// Core
import '@loaders.gl/loader-utils/test';
import '@loaders.gl/core/test';

// Image Formats
import '@loaders.gl/images/test';
import '@loaders.gl/textures/test';
// import '@loaders.gl/video/test';
// import '@loaders.gl/geotiff/test';
// import '@loaders.gl/zarr/test';
import '@loaders.gl/netcdf/test';

// Pointcloud/Mesh Formats
import '@loaders.gl/draco/test';
import '@loaders.gl/las/test';
import '@loaders.gl/obj/test';
import '@loaders.gl/pcd/test';
import '@loaders.gl/ply/test';
import '@loaders.gl/terrain/test';

// // Scenegraph Formats
import '@loaders.gl/gltf/test';

// 3D Tile Formats
import '@loaders.gl/3d-tiles/test';
import '@loaders.gl/i3s/test';
import '@loaders.gl/potree/test';
import '@loaders.gl/tiles/test';

// Geospatial Formats
// TODO restore once we have upgraded to ES modules
// import '@loaders.gl/flatgeobuf/test';
import '@loaders.gl/geopackage/test';
import '@loaders.gl/gis/test';
import '@loaders.gl/kml/test';
import '@loaders.gl/mvt/test';
import '@loaders.gl/shapefile/test';
import '@loaders.gl/wkt/test';
import '@loaders.gl/wms/test';

// Table Formats
import '@loaders.gl/schema/test';
import '@loaders.gl/arrow/test';
import '@loaders.gl/csv/test';
import '@loaders.gl/json/test';
import '@loaders.gl/excel/test';
import '@loaders.gl/parquet/test';

// unstructured (JSON) formats
// JSON listed in tabular loaders since it optionally supports that category
import '@loaders.gl/bson/test';
import '@loaders.gl/xml/test';

// Archive Formats
import '@loaders.gl/compression/test';
import '@loaders.gl/crypto/test';
import '@loaders.gl/zip/test';

// Tile converter
import '@loaders.gl/tile-converter/test';
