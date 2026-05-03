pipeline {
  agent any

  tools {
  nodejs 'NodeJS'
}

  environment {
    BASE_URL = 'https://devhis.sancyberhad.com'
    NODE_TLS_REJECT_UNAUTHORIZED = '0'
  }

  stages {

    stage('Checkout Code') {
      steps {
        git branch: 'main', url: 'https://github.com/archaudhari/nHIS_kpj-automation.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        bat 'npx playwright install'
      }
    }

    stage('Run Tests') {
      steps {
        bat 'npx playwright test'
      }
    }

  }

  post {
    success {
      echo '✅ Build Passed'
    }
    failure {
      echo '❌ Build Failed'
    }
  }
}