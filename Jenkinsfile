pipeline {
  agent any

  environment {
    BASE_URL = 'https://devhis.sancyberhad.com'
    NODE_TLS_REJECT_UNAUTHORIZED = '0'
  }

  stages {

    stage('Checkout Code') {
      steps {
        git branch: 'main', url: 'https://your-repo-url.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npx playwright test'
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