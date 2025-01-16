const fs = require('fs');

const requiredDirectories = [
  'public',
  'src',
  'src/assets',
  'src/components',
  'src/pages',
  'src/styles',
  'src/utils'
];

function checkDirectoryStructure() {
  const missingDirs = [];
  requiredDirectories.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      missingDirs.push(dir);
    }
  });

  if (missingDirs.length > 0) {
    console.log('❌ Missing required directories:');
    missingDirs.forEach((dir) => console.log(`- ${dir}`));
    process.exitCode = 1;
  } else {
    console.log('✅ Project directory structure is valid.');
  }
}

checkDirectoryStructure();