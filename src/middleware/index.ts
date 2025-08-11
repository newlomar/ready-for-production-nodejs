import { handleCors, handleBodyRequestParsing, handleCompression } from "./common.js";

import { handleAPIDocs } from "./apiDocs.js";

export default [handleCors, handleBodyRequestParsing, handleCompression, handleAPIDocs]