pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        BASE_URL = 'https://devhis.sancyberhad.com'
        KPJ_USERNAME = credentials('Test_KPJ')   // stored in Jenkins credentials
        KPJ_PASSWORD = credentials('AJay@123')
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
                sh 'npm ci'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test --reporter=line'
            }
        }

        stage('Publish Report') {
            steps {
                sh 'npx playwright show-report --port=9323 &'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            junit 'test-results/*.xml' // if you generate JUnit XML
        }
    }
}
