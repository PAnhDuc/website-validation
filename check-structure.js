const fs = require("fs");

const REQUIRED_FOLDERS = [
  "public",
  "src",
  "src/assets",
  "src/components",
  "src/pages",
  "src/styles",
  "src/utils",
];

const missingFolders = REQUIRED_FOLDERS.filter(
  (folder) => !fs.existsSync(folder)
);

if (missingFolders.length > 0) {
  console.error("❌ Cấu trúc dự án không hợp lệ. Vui lòng kiểm tra:");
  console.error(missingFolders.map((f) => `- ${f}/`).join("\n"));
  process.exit(1);
} else {
  console.log("✅ Cấu trúc dự án hợp lệ!");
}
