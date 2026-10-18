
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'Source code retrieved from GitHub'
            }
        }

        stage('Build') {
            steps {
                sh 'mkdir -p dist'
                sh 'cp index.html style.css script.js dist/'
                echo 'Website files copied to dist'
            }
        }

        stage('Test') {
            steps {
                sh 'test -s dist/index.html'
                sh 'test -s dist/style.css'
                sh 'test -s dist/script.js'
                echo 'All required files exist'
            }
        }

        stage('Quality Check') {
            steps {
                sh 'grep -qi "<html" index.html'
                sh 'grep -q "script.js" index.html'
                echo 'Basic quality checks passed'
            }
        }

        stage('Package') {
            steps {
                sh 'jar --create --file website.zip -C dist .'
                archiveArtifacts artifacts: 'website.zip', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                sh 'mkdir -p deploy'
                sh 'cp website.zip deploy/website.zip'
                echo 'Package copied to deploy directory'
            }
        }
    }
}
