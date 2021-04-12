
Abstract
--------

In this study, we analyzed the time series data of CO<sub>2</sub> levels
of a certain area over the past few decades. Three models SARIMA models
`ARIMA(2,1,2)` × `(2,1,2)`<sub>`12`</sub>,
`ARIMA(3,1,2)` × `(3, 1, 2)`<sub>`12`</sub>, and
`ARIMA(1,1,1)` × `(2,1,2)`<sub>`12`</sub> was fitted and tested. And
were selected and we forecast for another 72 months with this model.
Through the above analysis, we found that although there are periodic
fluctuations in the levels of CO<sub>2</sub>, the overall level will
still be increasing. Therefore, carbon dioxide will still be a long term
environment problem.

Introduction
------------

The data used for this study is from R package , which collected monthly
average carbon dioxide (unit in ppm) from March, 1958 to November 2018
at . This data set keeps the longest record of measuring CO<sub>2</sub>
in the atmosphere directly. This measurement was started by of the . The
data was defined as the ratio of the number of molecules of carbon
dioxide and the number of molecules of dry air, then multiplied by 1
million to make the data in a reasonable scale.

Over the past decades, environment has been an important topic of the
human society. As a subtopic of environment problem, CO<sub>2</sub>, a
kind of greenhouse gas, is an important indicator of global warning.
Therefore, scientists are interested in CO<sub>2</sub> levels. Through
this study, we want to figure out how CO<sub>2</sub> levels have changed
over the past decades and forecast the future trend.

Statistical Methods
-------------------

### I. Exploratory Analysis

First, let us get familiar with the data by looking at the plot of the
data.

<img src="457Final_files/figure-markdown_github/plot(cardox)-1.png" alt="plot of cardox" width="100%" />
<p class="caption">
plot of cardox
</p>

From we can see a clear increasing trend. To analyze time series, we
have to make the the data into stationary. We can achieve this by making
a difference of the data. Let us take a look at the plot of the differed
data.

<img src="457Final_files/figure-markdown_github/plot(diffcardox)-1.png" alt="plot of difference of cardox" width="90%" />
<p class="caption">
plot of difference of cardox
</p>

From , although we have removed the increasing trend by making
difference once, there still seems to be some seasonal pattern because
we can observe patterns like wave crest and wave trough. By output of R
function , we found the frequency of this data is 12. This makes sense
since it is a monthly data. So in this case we should fit a seasonal
ARIMA model where the seasonal period is 12.

<img src="457Final_files/figure-markdown_github/plot(diff12cardox)-1.png" alt="plot of cardox, removed seasonal period and trend" width="90%" />
<p class="caption">
plot of cardox, removed seasonal period and trend
</p>

From , now we can see the data centered around zero and the variance of
the data is not significant. So we can conclude this series is
stationary.

### II. Model Proposal

Generally, time series data could be analyzed with model, which stands
for . For a model , is the order of AR, auto-regressive part, d is the
order of the difference, and is the order of MA, moving average part.
And now we found seasonal period in the data, in this case we should fit
a seasonal ARIMA model, which can be called a model, with 4 orders for
seasonal part: . Denote the original series as *x*<sub>*t*</sub>, then
now the series we will be working on is
∇<sub>12</sub>∇*x*<sub>*t*</sub> = (*x*<sub>*t*</sub> − *x*<sub>*t* − 1</sub>) − (*x*<sub>*t* − 12</sub> − *x*<sub>*t* − 13</sub>),
which will be a `ARIMA(p,1,q)` × `(P, 1, Q)`<sub>`12`</sub> model. To
find and , we should check the auto-correlation function (ACF) and
partial auto-correlation function (PACF) plot.

<img src="457Final_files/figure-markdown_github/acf-1.png" alt="ACF and PACF plot" width="90%" />
<p class="caption">
ACF and PACF plot
</p>

From we can find the remaining orders.

From ACF we can find and : After the plot cuts off, so we choose for
seasonal component. Within one season, it seems to cut off after 2. So
we choose for non-seasonal component.

From PACF we can find and : After the plot cuts off, so we choose for
seasonal component. Within one season, it seems to cut off after 2. So
we choose for non-seasonal component.

Therefore, we propose a `M1 = ARIMA(2,1,2)` × `(2,1,2)`<sub>`12`</sub>
model here. It seems that there could be more selection for the orders,
so we could propose another two model:
`M2 = ARIMA(3,1,2)` × `(3,1,2)`<sub>`12`</sub> and
`M3 = ARIMA(1,1,1)` × `(2,1,2)`<sub>`12`</sub>. We will use function to
fit the models.

### III. Model Diagnostics

<img src="457Final_files/figure-markdown_github/m1-1.png" alt="M1 Residual Plots" width="90%" />
<p class="caption">
M1 Residual Plots
</p>

<img src="457Final_files/figure-markdown_github/m2-1.png" alt="M1 Residual Plots" width="90%" />
<p class="caption">
M1 Residual Plots
</p>

<img src="457Final_files/figure-markdown_github/m3-1.png" alt="M1 Residual Plots" width="90%" />
<p class="caption">
M1 Residual Plots
</p>

From R output we could get the following results of parameter
estimations and the corresponding p-value:

-   For , none of these p-values is smaller than 0.05, so none of these
    parameters is significant.
-   For , only p-values for are bigger than 0.05, so other parameters
    passed the significance test.
-   For , only p-values for are smaller than 0.05, so only these two
    parameters are significant.

to is the residual plot of the three proposed models respectively. We
can see that for all three models, there is no clear pattern in the
standardized residual plots and it seems to be a straight line in the
Q-Q plot. So we can conclude that the residuals for three models are all
approximately normally distributed. From ACF of residuals we can confirm
that the residuals are not correlated for the three models. As for the
Ljung-Box, we have the null hypothesis: The residuals are uncorrelated.
Since for these three models, almost all p-values are bigger than 0.05,
we fail to reject the null hypothesis. So this supports our result from
the ACF plot of residuals.

### IV. Model Selection

Since all these three models do not violate any assumptions, how can we
determine the final model? Actually we can do this by checking their AIC
and BIC. From R output we can get the following table:
From the table we could find that
`M3 = ARIMA(1,1,1)` × `(2,1,2)`<sub>`12`</sub> has the smallest AIC and
BIC. Therefore we will use as our final model.

### V. Forecasting

<img src="457Final_files/figure-markdown_github/forecast-1.png" alt="Forecast with M3" width="90%" />
<p class="caption">
Forecast with M3
</p>

gives us the forecast in the next 72 months / 6 years from November
2018. We observe similar pattern as the previous months.

### VI. Spectral Analysis

<img src="457Final_files/figure-markdown_github/spe-1.png" alt="Spectral Analysis of cardox" width="90%" />
<p class="caption">
Spectral Analysis of cardox
</p>

From R function , we get the first three predominant periods and their
corresponding confidence intervals as the following table:
We can see that the confidence intervals are all so wide that could
hardly provide any significant information.

Results
-------

To analyze a time series, first we have to look at the plot of the data.
Based on the plot, we have to tell whether the data is stationary or
not. If not then we should apply some transformations. For example, log
transformation to reduce the variance and making difference to remove
trend/seasonal pattern. After transformation of the data we got a
stationary time series. Then we should find the dependence orders by
looking at the ACF and PACF plots. Then we can propose some possible
models and perform all necessary diagnostics. During this process we
might drop some model and then choose one with lowest AIC&BIC. With the
final model, we could make some prediction/forecast. Since this time
series could be expressed in terms of trigonometry, we could also apply
some Fourier Transform or Spectral Analysis to analyze the wave behavior
of the series.

Discussion
----------

What we can conclude now is that the carbon dioxide level will
definitely keep increasing in the following years and there will be
monthly fluctuations. This indicates that the effect of human activities
on the environment never stops, which should be a warning for us. We
should put more efforts to dealing with the environment problems caused
by us. This is our responsibility, not only for us, but also for the
future generations.

There could be a possible weakness of this study, which is that from the
forecast seems following the historical data pattern too similarly. A
possible reason for this is that the model could be over-fitting to the
training data. This could be solved by penalization or regularization.
Anyway, this study is not sufficient. Further study is required.
