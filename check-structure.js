const fs = require('fs');

const requiredDirectories = [
  'styles',
  'scripts',
  'assets',
  'assets/images',
  'assets/fonts',
  'assets/icons',
  'index.html'
];

function checkDirectoryStructure() {
  const missingDirs = [];
  requiredDirectories.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      missingDirs.push(dir);
    }
  });

  if (missingDirs.length > 0) {
    console.log('❌ Cấu trúc thư mục trong dự án không đúng:');
    missingDirs.forEach((dir) => console.log(`- ${dir}`));
    process.exitCode = 1;
  } else {
    console.log('✅ Cấu trúc thư mục trong dự án của bạn đã đúng.');
  }
}

checkDirectoryStructure();